# Contact QR images

Add the real WeChat QR image here as `wechat-qr.png`, keeping its original quiet zone.
In `content/site.ts`, set the WeChat channel's `qrImage` to `/contact/wechat-qr.png`.
Optionally set `account` to the real WeChat ID.

Until `qrImage` is set, the site displays an explicitly labelled placeholder. It does not
show a simulated QR code or claim that visitors can contact the team yet.

Add another entry to `contactChannels` to display another contact QR image.
Use local PNG, JPEG or WebP files. No storefront, checkout, or order-submission integration is used.
