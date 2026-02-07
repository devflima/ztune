import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: W, height: H } = getDeviceInfo();

export const TITLE = {
  text: getText("premium_title"),
  x: 0,
  y: px(100),
  w: W,
  h: px(60),
  color: 0xffffff,
  text_size: px(40),
  align_h: hmUI.align.CENTER_H,
};

export const SUBTITLE = {
  text: getText("premium_subtitle"),
  x: px(40),
  y: px(170),
  w: W - px(80),
  h: px(120),
  color: 0xaaaaaa,
  text_size: px(22),
  text_style: hmUI.text_style.WRAP,
  align_h: hmUI.align.CENTER_H,
};

export const UPGRADE_BUTTON = {
  x: px(60),
  y: H - px(160),
  w: W - px(120),
  h: px(60),
  radius: px(30),
  text: getText("upgrade"),
  text_size: px(24),
  color: 0xf5c542,
  text_color: 0x000000,
};
