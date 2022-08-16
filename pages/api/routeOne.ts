// import { readFileSync } from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   const file = path.join(process.cwd(), 'files', 'test.json');
//   const stringified = readFileSync(file, 'utf8');

//   res.setHeader('Content-Type', 'application/json');
//   return res.end(stringified);
// }

import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  
  console.log('req.query:', req.query);

  res.setHeader(
    'Set-Cookie',
    cookie.serialize('color', 'green', {
      secure: true,
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
    })
  );
  res.status(200).send({
    method: req.method,
    body: req.body,
    // query: req.query,
    url: req.url,
    cookies: req.cookies,
  });

  //  response.status(200).cookies.set('token', 'RENDER', { httpOnly: true, domain: process.env.NODE_ENV === 'development' ? '.localhost' : '.aaronadler.com' })
  // res.setHeader('Set-Cookie', ['color=red;ck=value; HttpOnly']);
  // res.statusCode = 200;

  // res.json({
  //   success: true,
  // });
}
