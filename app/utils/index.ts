import axios from 'axios';

// Fear and Greed Index 데이터를 가져오는 함수
export const fetchFearGreedIndex = async () => {
  const { data } = await axios.get('https://api.alternative.me/fng/?limit=1');
  return data;
};

// 날짜를 "YYYY년 MM월 DD일 HH시 기준" 형식으로 변환하는 함수
export const formatTimestamp = (timestamp: string) => {
  const date = new Date(Number(timestamp) * 1000); // UNIX 타임스탬프인 경우 * 1000 (초 단위)
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
  const day = date.getDate();
  const hours = date.getHours();

  return `${year}년 ${month}월 ${day}일 ${hours}시 기준`;
};