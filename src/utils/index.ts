import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const createCurrentDate = () => {
  const currentDate: Date = new Date();
  const uid = String(currentDate.getTime());
  return { uid, currentDate };
};

const redirectwithRefresh = (url: string, router: AppRouterInstance) => {
  router.push(url);
  router.refresh();
};

const formatDate = (timestamp: string | number | undefined) => {
  if (!timestamp) {
    return undefined;
  }
  // UNIXタイムスタンプ
  const unixTimestamp = timestamp;

  // UNIXタイムスタンプをミリ秒単位に変換
  const date = new Date(Number(unixTimestamp) * 1000);

  // 日付を取得
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // 月は0から始まるため、1を加える
  const day = ("0" + date.getDate()).slice(-2);

  // yyyy-mm-dd形式の日付文字列を作成
  const formattedDate = year + "-" + month + "-" + day;

  return formattedDate;
};
export { createCurrentDate, redirectwithRefresh, formatDate };
