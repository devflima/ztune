import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: W, height: H } = getDeviceInfo();

const button = (text, y) => ({
  x: px(50),
  y,
  w: W - px(100),
  h: px(56),
  radius: px(28),
  text,
  text_size: px(22),
  text_color: 0x000000,
});

export const TITLE = {
  text: getText("choose_provider"),
  x: px(30),
  y: px(60),
  w: W - px(60),
  h: px(60),
  color: 0xffffff,
  text_size: px(26),
  align_h: hmUI.align.CENTER_H,
  text_style: hmUI.text_style.WRAP,
};

export const PROVIDERS = [
  { key: "spotify", color: 0x1db954 },
  { key: "deezer", color: 0xef5466 },
  { key: "ytmusic", color: 0xff0000 },
  { key: "amazon", color: 0x00a8e1 },
].map((p, i) => ({
  ...button(getText(p.key), px(140) + i * px(70)),
  color: p.color,
  provider: p.key,
}));
