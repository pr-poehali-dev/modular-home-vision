import json
import os
import urllib.request
import urllib.error


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта GreenFrameHouse в Telegram-бот."""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
    except json.JSONDecodeError:
        return {"statusCode": 400, "headers": cors_headers, "body": json.dumps({"error": "Invalid JSON"})}

    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    message = body.get("message", "").strip()
    source = body.get("source", "Форма на сайте")

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False),
        }

    bot_token = os.environ["TELEGRAM_BOT_TOKEN"]
    chat_id = os.environ["TELEGRAM_CHAT_ID"]

    text_parts = [
        "🏡 *Новая заявка с сайта GreenFrameHouse*",
        "",
        f"👤 *Имя:* {name}",
        f"📞 *Телефон:* {phone}",
    ]
    if message:
        text_parts.append(f"💬 *Сообщение:* {message}")
    text_parts.append(f"📍 *Источник:* {source}")

    text = "\n".join(text_parts)

    payload = json.dumps({
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "Markdown",
    }).encode("utf-8")

    req = urllib.request.Request(
        f"https://api.telegram.org/bot{bot_token}/sendMessage",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            resp.read()
    except urllib.error.HTTPError as e:
        err_body = e.read().decode()
        return {
            "statusCode": 502,
            "headers": cors_headers,
            "body": json.dumps({"error": "Telegram error", "detail": err_body}),
        }

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }