/**
 * @Author: Carlos Galeano
 * @Date:   2025-10-30 17:43:26
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-06 10:16:49
 */
import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;
