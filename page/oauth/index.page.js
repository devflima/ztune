import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { push } from "@zos/router";
import { loadProvider } from "../../utils/storage";
import { TITLE } from "zosLoader:./index.page.[pf].layout.js";

const logger = Logger.getLogger("ztune");

Page({
  onInit() {
    this.provider = loadProvider();
    logger.info(`Starting OAuth fake for ${this.provider}`);
  },

  build() {
    hmUI.createWidget(
      hmUI.widget.TEXT,
      TITLE(this.provider)
    );

    // Fake OAuth delay
    setTimeout(() => {
      logger.info("OAuth success (fake)");

      // próximo passo depois do login
      // por enquanto só log
      // depois pode ir pra player ou home
    }, 2000);
  },
});
