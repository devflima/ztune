import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: W, height: H } = getDeviceInfo();

export const TITLE = {
  text: getText("appName"),
  x: 0,
  y: px(120),
  w: W,
  h: px(60),
  color: 0xffffff,
  text_size: px(44),
  align_h: hmUI.align.CENTER_H,
};

export const SUBTITLE = {
  text: getText("subtitle"),
  x: px(40),
  y: px(180),
  w: W - px(80),
  h: px(80),
  color: 0xaaaaaa,
  text_size: px(22),
  align_h: hmUI.align.CENTER_H,
  text_style: hmUI.text_style.WRAP,
};

export const CONNECT_BUTTON = {
  x: px(60),
  y: H - px(160),
  w: W - px(120),
  h: px(60),
  radius: px(30),
  text: getText("connect"),
  text_size: px(24),
  color: 0x1db954,
  text_color: 0x000000,
};
