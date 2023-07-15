# MUZI MARINE 프로젝트 소개

1. 프로젝트 소개
   해양생물에게 힘을보내는 사이트입니다.
2. 구현기능

- 글 조회,
- 글 작성,
- 글 수정,
- 글 삭제

## 예제

img

## 설치 가이드

yarn install

## API

| API    | url     | method   | response(GET)                       | request(POST)                       |
| ------ | ------- | -------- | ----------------------------------- | ----------------------------------- |
| 글조회 | /       | GET      | title, pass, images:[], content, id |
| 글작성 | /write  | Post     |                                     | title, pass, images:[], content     |
| 글수정 | /edit   | GET,POST | title, pass, images:[], content, id | title, pass, images:[], content, id |
| 글삭제 | /detail | Post     | id                                  |

### address

- muzi5@kakao.com
- 010 - 3616 - 2231
