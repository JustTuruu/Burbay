import Image from "next/image";

import { GlobeIcon, WeChatIcon } from "@/components/ui/Icons";
import { contactChannels, site } from "@/content/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="shell contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">{site.contact.eyebrow}</p>
          <h2 id="contact-heading">{site.contact.heading}</h2>
          <p>{site.contact.body}</p>
          <div className="contact-topics">
            <span>Бөөний захиалга</span>
            <span>Хамтын ажиллагаа</span>
            <span>Үнийн санал</span>
          </div>
        </div>
        <div className="contact-channels">
          {contactChannels.map((channel) => (
            <div key={channel.name} className="contact-channel">
              <div className="channel-heading">
                {channel.name === "WeChat" ? <WeChatIcon /> : <GlobeIcon />}
                <h3>{channel.name}</h3>
              </div>
              <p className="channel-label">{channel.label}</p>
              {channel.qrImage ? (
                <div className="qr-image">
                  <Image
                    src={channel.qrImage}
                    alt={`${channel.name} — холбогдох QR код`}
                    width={200}
                    height={200}
                    unoptimized
                  />
                </div>
              ) : (
                <div
                  className="qr-placeholder"
                  role="img"
                  aria-label={`${channel.name}-ийн QR зураг оруулах хэсэг. Холболт хараахан нээгдээгүй.`}
                >
                  <span className="qr-corner top-left" />
                  <span className="qr-corner top-right" />
                  <span className="qr-corner bottom-left" />
                  <span className="qr-corner bottom-right" />
                  <span className="qr-plus" aria-hidden="true">
                    +
                  </span>
                  <span>QR КОД</span>
                  <small>Удахгүй нэмэгдэнэ</small>
                </div>
              )}
              <p className="channel-description">
                {channel.qrImage
                  ? channel.description
                  : `${channel.name} холболт тун удахгүй нээгдэнэ.`}
              </p>
              {channel.account ? (
                <p className="channel-account">ID: {channel.account}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
