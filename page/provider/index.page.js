import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { saveProvider } from "../../utils/storage";
import {
  TITLE,
  PROVIDERS,
} from "zosLoader:./index.page.[pf].layout.js";

const logger = Logger.getLogger("ztune");

Page({
  onInit() {
   logger.debug("provider onInit");
  },

  build() {
    hmUI.createWidget(hmUI.widget.TEXT, TITLE);

    PROVIDERS.forEach((btn) => {
      hmUI.createWidget(hmUI.widget.BUTTON, {
        ...btn,
        click_func: () => {
          saveProvider(btn.provider);
          logger.info(`Provider saved: ${btn.provider}`);
        },
      });
    });
  },
});

