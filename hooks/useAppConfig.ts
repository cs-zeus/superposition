import { AppConfig } from "../types/AppConfig";
import { useState } from "react";

export const useAppConfig = () => {
  const initialAppConfig: AppConfig = {
    hasGridLineEnabled: true,
    isShowModal: false,
  };
  const [appConfig, setAppConfig] = useState<AppConfig>(initialAppConfig);

  const toggleGridLineHandler = () => {
    setAppConfig((prev) => ({
      ...prev,
      hasGridLineEnabled: !prev.hasGridLineEnabled,
    }));
  };

  const openModalHandler = () => {
    setAppConfig((prev) => ({ ...prev, isShowModal: true }));
  };

  const closeModalHandler = () => {
    setAppConfig((prev) => ({ ...prev, isShowModal: false }));
  };

  return { appConfig, toggleGridLineHandler, openModalHandler, closeModalHandler };
}

