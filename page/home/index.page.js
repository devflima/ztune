import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { push } from "@zos/router";
import { loadProvider } from "../../utils/storage";
import {
  TITLE,
  SUBTITLE,
  CONNECT_BUTTON,
} from "zosLoader:./index.page.[pf].layout.js";

const logger = Logger.getLogger("ztune");

Page({
onInit() {
  logger.debug("home onInit");

  const provider = loadProvider();

  if (provider) {
    logger.info(`Provider found (${provider}), skipping selection`);

    if (provider) {
      logger.info(`Provider found (${provider}), ready to sync`);
    }

  } else {
    logger.info("No provider found, showing home");
  }
},

  build() {
    hmUI.createWidget(hmUI.widget.TEXT, TITLE);
    hmUI.createWidget(hmUI.widget.TEXT, SUBTITLE);

    hmUI.createWidget(hmUI.widget.BUTTON, {
      ...CONNECT_BUTTON,
      click_func: () => {
        push({
          url: "page/provider/index.page",
        });
        logger.info("Connect button clicked");
      },
    });
  },

  onDestroy() {
    logger.debug("home onDestroy");
  },
});
