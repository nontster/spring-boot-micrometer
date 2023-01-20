import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
      { duration: '30s', target: 50 },
      { duration: '5m', target: 1000 },
      { duration: '30s', target: 0 },
    ],
};

export default function () {
  const res = http.get('http://echo.n12g.com/home');
  check(res, { 'status was 200': (r) => r.status == 200,
               'verify homepage text': (r) => r.body.includes('ok'),
        });
  sleep(1);
}