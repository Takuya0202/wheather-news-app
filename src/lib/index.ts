import * as Location from "expo-location";

export default async function fetchWeather() {
  // 位置情報を許可するか
  const { status } = await Location.requestForegroundPermissionsAsync();
  //   許可しない場合
  if (status !== "granted") {
    console.error("位置情報へのアクセスが拒否されました");
    return;
  }

  // 位置情報を取得
  const location = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = location.coords;

  const url = `http://10.96.3.226:8787/api/wheather?lat=${latitude}&lon=${longitude}`;

  const res = await fetch(url);

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`サーバーエラー (${res.status}):`, errorText);
    throw new Error(`取得に失敗しました: ${res.status}`);
  }

  const data = await res.json();
  console.log("取得データ:", data);
  return data;
}
