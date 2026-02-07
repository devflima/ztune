import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { loadProvider } from "../../utils/storage";
import { TITLE } from "zosLoader:./index.page.[pf].layout.js";

const logger = Logger.getLogger("ztune");

Page({
  onInit() {
    const provider = loadProvider();
    logger.info(`Starting sync for provider: ${provider}`);
  },

  build() {
    hmUI.createWidget(hmUI.widget.TEXT, TITLE);

    // Fake loading
    setTimeout(() => {
      logger.info("Sync finished successfully");
    }, 2000);
  },
});
