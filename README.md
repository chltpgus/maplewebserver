# maplewebserver

maplewebserver는 maplewebsite의 백엔드 구성을 해주는 웹서버다.

사용 기술 : heroku(웹서버 호스팅), Node.js, express, Mysql

<p align="center">
<img src="https://user-images.githubusercontent.com/67909892/109591988-dc171600-7b51-11eb-8f5a-1acda7aa51d0.png" > </p>

Mysql 테이블 구성이다. id, name, num으로 구성되어 있다. 테스트를 사용한 유저 수만 저장하면 되기 때문에 간단하게 구성했다.


<p align="center">
<img src="https://user-images.githubusercontent.com/67909892/109592213-3e701680-7b52-11eb-8a65-76cb56ed612d.png" > <img src="https://user-images.githubusercontent.com/67909892/109592232-43cd6100-7b52-11eb-8ca9-848af0a10372.png" > </p>

함수에 들어가는 오브젝트와 변수들을 선언하고, 클라이언트에게 GET요청이 오면 SELECT으로 데이터베이스에서 user 테이블을 가져와서 users 오브젝트에 담아 웹서버에 json형식으로 보낸다.



<p align="center">
<img src="https://user-images.githubusercontent.com/67909892/109592511-b8080480-7b52-11eb-9530-71c8f85d7557.png" >  </p>

클라이언트에게 POST 전송이 오면 users 오브젝트에 받아서 변수 num, id에 업데이트 내용을 담아 데이터베이스에 UPDATE 해준다.
