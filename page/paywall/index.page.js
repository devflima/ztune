import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { push } from "@zos/router";
import { setPremium } from "../../utils/storage";
import {
  TITLE,
  SUBTITLE,
  UPGRADE_BUTTON,
} from "zosLoader:./index.page.[pf].layout.js";

const logger = Logger.getLogger("ztune");

Page({
  build() {
    hmUI.createWidget(hmUI.widget.TEXT, TITLE);
    hmUI.createWidget(hmUI.widget.TEXT, SUBTITLE);

    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...UPGRADE_BUTTON,
      click_func: () => {
        logger.info("Premium unlocked (fake)");

        setPremium();

        push({
          url: "page/home/index.page",
        });
      },
    });
  },
});
