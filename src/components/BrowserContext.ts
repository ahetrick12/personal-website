import * as React from 'react';

export enum Browser {
  Chrome = 'Chrome',
  Firefox = 'Firefox',
  Safari = 'Safari',
  Opera = 'Opera',
  InternetExplorer = 'Internet Explorer',
  Unknown = 'Unknown',
}
export const BrowserContext = React.createContext<Browser>(Browser.Unknown);
