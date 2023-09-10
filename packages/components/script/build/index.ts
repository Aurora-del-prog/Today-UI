import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';
//删除easyest

export const removeDist = () => {
  return delPath(`${pkgPath}/sui`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.css`)
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/sui/lib/src`))
    .pipe(dest(`${pkgPath}/sui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
