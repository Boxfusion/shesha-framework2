const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withLess = require('next-with-less');
const dayjs = require('dayjs');
const isProd = process.env.NODE_ENV === 'production';

/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = (phase) => {
  const env = {
    NEXT_APP_ENV: process.env.NEXT_APP_ENV ?? 'dev',
    //NEXT_APP_API_HOST: process.env.NEXT_APP_API_HOST,
  };
  /** @type {import('next').NextConfig} */
  const config = {
    output: 'standalone',
    reactStrictMode: false,
    transpilePackages: [
      'antd', 
      '@ant-design', 
      'ant-design', 
      'rc-align', 
      'rc-cascader', 
      'rc-checkbox', 
      'rc-collapse', 
      'rc-dialog', 
      'rc-drawer', 
      'rc-dropdown', 
      'rc-field-form', 
      'rc-image', 
      'rc-input', 
      'rc-input-number', 
      'rc-mentions', 
      'rc-menu', 
      'rc-motion', 
      'rc-notification', 
      'rc-overflow', 
      'rc-pagination', 
      'rc-picker', 
      'rc-progress', 
      'rc-rate', 
      'rc-resize-observer', 
      'rc-segmented', 
      'rc-select', 
      'rc-slider', 
      'rc-steps', 
      'rc-switch', 
      'rc-table', 
      'rc-tabs', 
      'rc-textarea', 
      'rc-tooltip', 
      'rc-tree', 
      'rc-tree-select', 
      'rc-trigger', 
      'rc-upload', 
      'rc-util', 
      'rc-virtual-list'],
    poweredByHeader: false,
    productionBrowserSourceMaps: true,
    env,
    publicRuntimeConfig: env,
    typescript: {
      tsconfigPath: './tsconfig.next.json',
    },
    compiler: {
      // Remove `console.*` output except `console.error`
      removeConsole: isProd
        ? {
            exclude: ['error'],
          }
        : false,
      // Uncomment this to suppress all logs.
      // removeConsole: true,
    },
    lessLoaderOptions: {
      // cssModules: true,
      lessOptions: {
        javascriptEnabled: true,
        modifyVars: {},
      },
    },
    // Disable css--modules component styling
    webpack(config) {
      //  Source: https://cwtuan.blogspot.com/2022/10/disable-css-module-in-nextjs-v1231-sept.html
      config.module.rules.forEach((rule) => {
        const { oneOf } = rule;
        if (oneOf) {
          oneOf.forEach((one) => {
            if (!`${one.issuer?.and}`.includes('_app')) return;
            one.issuer.and = [path.resolve(__dirname)];
          });
        }
      });
      return config;
    },
  };
  return withBundleAnalyzer(
    withLess(config), {
      debug: !isProd,
      environment: process.env.NODE_ENV,
      release: `${process.env.NODE_ENV}@${dayjs().format('YYYY-MM-DD HH:mm')}`,
    }
  );
};

const final = nextConfig();
console.log('NEXT config: ', final);

module.exports = final;