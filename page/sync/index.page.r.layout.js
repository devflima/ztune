import * as hmUI from "@zos/ui";
import { getText } from "@zos/i18n";
import { getDeviceInfo } from "@zos/device";
import { px } from "@zos/utils";

export const { width: W, height: H } = getDeviceInfo();

export const TITLE = {
  text: getText("syncing"),
  x: px(40),
  y: H / 2 - px(30),
  w: W - px(80),
  h: px(60),
  color: 0xffffff,
  text_size: px(24),
  align_h: hmUI.align.CENTER_H,
  text_style: hmUI.text_style.WRAP,
};
