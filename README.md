# YOUR-Card

## 설명

YOUR-Card 는 사용자에게 혜택 좋은 카드를 추천해주는 기능을 제공합니다.
이 application은 React.js를 사용하여 구축되었습니다.
[배포 사이트 보러가기](https://m-card-three.vercel.app/)

## 기능

- **로그인 / 회원가입**: Firebase Authentication를 활용한 로그인 및 회원가입 기능
- **카드신청 / 신청상태 저장**: 신청 상태 체크(2초마다)하여 이탈 후 재진입시 진행중이던 단계로 이동
- **반응형 디자인**: 다양한 화면 크기에서 원활한 사용자 경험 제공.

## 설치 방법

다음 단계에 따라 프로젝트를 로컬에서 실행할 수 있습니다:

1. **repository clone**:

   ```bash
   git clone git@github.com:manonkim2/m_card.git
   ```

2. **install**:

   ```bash
   yarn install
   ```

3. **local server start**:

   ```bash
   yarn start
   ```

   서버가 `http://localhost:3000/`에서 실행됩니다.

## 기술 스택

- **React**
- **Firebase**: 로그인, 데이터 관리
- **Vercel**: 애플리케이션 호스팅 플랫폼.
- **CSS Modules**: 스타일링을 위한 CSS 모듈화
- **webpack-bundle-analyzer**: tree shaking으로 초기 로딩속도 개선
  
  [Before - bundle.js 347.79kb]
  
  초기 로딩시 lodash.js가 사용량에 비해 많은 용량을 차지하여 CJS에서 ES 방식으로 교체
  
<img width="423" alt="image 45" src="https://github.com/user-attachments/assets/a368065e-04b4-44a7-9a51-9bba2da091ed">

<img width="423" alt="image 46" src="https://github.com/user-attachments/assets/b3fc472e-5397-49a9-b91f-53d497d6f68f">  

   [After - bundle.js 323.7kb]  

<img width="354" alt="image 48" src="https://github.com/user-attachments/assets/bf23b519-266c-4662-9043-3b421ee27186">


