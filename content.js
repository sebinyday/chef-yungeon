/**
 * 이윤건 요리사 포트폴리오 - 작품/연락처 정보를 수정하는 파일
 * 음식명과 작품 설명은 첨부 사진을 바탕으로 작성한 초안입니다.
 * 게시 전에 실제 메뉴명, 조리 과정, 수상 정보, 이메일 공개 여부를 확인해주세요.
 * 생년월일, 전화번호, 집 주소, 자격증 번호 등의 개인정보는 넣지 마세요.
 */
window.CHEF_PORTFOLIO = {
  chef: {
    koreanName: '이윤건',
    englishName: 'Yun Geon Lee',
    email: 'llyg0223andy@gmail.com',
    // 소개 문구는 본인 확인 후 언제든 수정할 수 있습니다.
    philosophy: '음식에는 만드는 사람의 마음과 태도가 담긴다고 믿습니다.',
  },
  filters: [
  {
    "id": "all",
    "label": "전체",
    "count": true
  },
  {
    "id": "korean",
    "label": "한식 · 디저트"
  },
  {
    "id": "japanese",
    "label": "일식"
  },
  {
    "id": "chinese",
    "label": "중식"
  },
  {
    "id": "western",
    "label": "양식"
  }
],
  works: [
  {
    "id": "galbi-mandu",
    "title": "갈비만두",
    "subtitle": "",
    "category": "korean",
    "categoryLabel": "한식 · 디저트",
    "image": "assets/images/갈비만두.jpg",
    "alt": "갈비만두",
    "description": "돼지고기와 소갈비를 활용해 만두소를 만들고, 만두피에 소를 넣어 빚은 요리입니다. 고기의 풍미와 양념의 감칠맛이 조화를 이루도록 만두소의 간을 맞추고, 만두의 형태를 일정하게 잡아 완성했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "maejakgwa",
    "title": "매작과",
    "subtitle": "",
    "category": "korean",
    "categoryLabel": "한식 · 디저트",
    "image": "assets/images/매작과.png",
    "alt": "매작과",
    "description": "밀가루 반죽을 얇게 밀어 일정한 형태로 자른 뒤, 가운데에 칼집을 내어 반죽을 꼬아 만들었습니다. 기름에 튀겨 바삭한 식감을 살리고, 완성된 매작과를 시럽에 넣어 코팅했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "baekseolgi",
    "title": "백설기",
    "subtitle": "",
    "category": "korean",
    "categoryLabel": "한식 · 디저트",
    "image": "assets/images/백설기.png",
    "alt": "백설기",
    "description": "멥쌀가루를 활용해 쌀가루의 고운 입자와 부드러운 식감을 살린 떡입니다. 사진과 같이 흰색을 바탕으로 분홍색과 녹색 층을 구성해 단면의 색상 대비를 표현하고, 일정한 형태로 잘라 완성했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "songpyeon",
    "title": "송편",
    "subtitle": "",
    "category": "korean",
    "categoryLabel": "한식 · 디저트",
    "image": "assets/images/송편.jpg",
    "alt": "송편",
    "description": "멥쌀가루 반죽에 소를 넣고 반달 형태로 빚어 만든 전통 떡입니다. 반죽의 수분과 탄력을 조절해 표면이 매끄럽도록 성형하고, 일정한 크기와 형태를 유지하도록 완성했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "pat-susu",
    "title": "팥수수경단",
    "subtitle": "",
    "category": "korean",
    "categoryLabel": "한식 · 디저트",
    "image": "assets/images/팥수수경단.png",
    "alt": "팥수수경단",
    "description": "서로 다른 색감과 질감을 가진 경단을 구성했습니다. 경단의 크기를 일정하게 성형하고, 각각의 재료가 가진 고유한 풍미와 고물을 활용해 전통 떡의 특징을 표현했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "walnut-gangjeong",
    "title": "호두강정",
    "subtitle": "",
    "category": "korean",
    "categoryLabel": "한식 · 디저트",
    "image": "assets/images/호구강정.png",
    "alt": "호두강정",
    "description": "호두를 활용해 고소한 풍미와 바삭한 식감을 살린 전통식 견과류 간식입니다. 호두의 모양과 식감을 유지하면서 당액이 고르게 코팅되도록 조리하고, 먹음직스러운 갈색 윤기와 균일한 코팅 상태를 표현했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "salmon-sashimi",
    "title": "국화- 연어 숙성 사시미",
    "subtitle": "",
    "category": "japanese",
    "categoryLabel": "일식",
    "image": "assets/images/국화-연어 숙성 사시미.jpg",
    "alt": "국화- 연어 숙성 사시미",
    "description": "연어를 일정한 두께로 손질한 뒤 곤부지메와 시오지메 과정을 거쳐 재료의 풍미와 식감을 살린 사시미입니다. 연어를 국화 모양으로 배열해 시각적인 완성도를 높이고, 일정한 두께와 간격으로 배치해 플레이팅의 균형을 표현했습니다.",
    "details": [],
    "featured": true,
    "objectPosition": "center"
  },
  {
    "id": "white-fish-sashimi",
    "title": "도미 사시미",
    "subtitle": "",
    "category": "japanese",
    "categoryLabel": "일식",
    "image": "assets/images/도미 사시미.jpg",
    "alt": "도미 사시미",
    "description": "도미의 신선도와 담백한 풍미를 살릴 수 있도록 생선을 손질하고, 살의 결을 고려해 일정한 두께로 썰었습니다. 도미 특유의 색상과 결이 돋보이도록 부위별로 배열하고, 곁들임 재료를 활용해 전체적인 조화를 완성했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "mazesoba",
    "title": "마제소바",
    "subtitle": "",
    "category": "japanese",
    "categoryLabel": "일식",
    "image": "assets/images/마제소바.jpg",
    "alt": "마제소바",
    "description": "면을 중심으로 다진 고기와 여러 가지 고명을 배치하고, 소스와 재료가 조화를 이루도록 구성한 비빔면입니다. 면의 식감과 고명의 풍미를 살리고, 중앙에 달걀노른자를 배치해 시각적인 중심을 만들었습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "butadon",
    "title": "부타동",
    "subtitle": "",
    "category": "japanese",
    "categoryLabel": "일식",
    "image": "assets/images/부타동.jpg",
    "alt": "부타동",
    "description": "돼지고기를 적절한 크기로 손질해 양념과 함께 조리하고, 밥 위에 올려 완성한 덮밥입니다. 돼지고기에 양념이 고르게 배도록 조리해 감칠맛을 살리고, 밥과 고기의 비율 및 고명의 배치를 고려해 완성했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "salmon-donburi",
    "title": "사케동",
    "subtitle": "",
    "category": "japanese",
    "categoryLabel": "일식",
    "image": "assets/images/사케동.jpg",
    "alt": "사케동",
    "description": "신선한 연어를 일정한 두께로 손질해 밥 위에 올린 덮밥입니다. 연어의 색감과 결이 잘 드러나도록 배열하고, 레몬과 고명 등을 활용해 맛의 조화와 시각적인 완성도를 높였습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "beef-hotpot",
    "title": "스키야키",
    "subtitle": "",
    "category": "japanese",
    "categoryLabel": "일식",
    "image": "assets/images/스끼야끼.jpg",
    "alt": "스키야키",
    "description": "얇게 썬 소고기와 각종 채소, 버섯, 두부 등을 간장 베이스의 양념으로 조리한 일본식 전골 요리입니다. 재료마다 익는 속도를 고려해 조리하고, 소고기의 풍미와 채소의 단맛이 양념에 어우러지도록 구성했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "salmon-temari",
    "title": "연어구슬초밥",
    "subtitle": "",
    "category": "japanese",
    "categoryLabel": "일식",
    "image": "assets/images/연어 구슬 초밥.jpg",
    "alt": "연어구슬초밥",
    "description": "초밥용 밥을 일정한 크기로 성형하고, 연어를 활용해 한입 크기의 초밥으로 완성했습니다. 밥의 크기와 형태를 균일하게 맞추고, 연어를 정돈된 형태로 감싸 재료의 색감과 초밥의 입체감을 살렸습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "yusanseul",
    "title": "유산슬",
    "subtitle": "",
    "category": "chinese",
    "categoryLabel": "중식",
    "image": "assets/images/유산슬.png",
    "alt": "유산슬",
    "description": "해산물과 육류, 각종 채소를 가늘게 손질한 뒤 볶아 걸쭉한 소스와 함께 완성한 중식 요리입니다. 재료마다 익는 속도를 고려해 순서대로 조리하고, 각 식재료의 식감과 풍미가 조화를 이루도록 완성했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "eohyang-gaji",
    "title": "어향가지",
    "subtitle": "",
    "category": "chinese",
    "categoryLabel": "중식",
    "image": "assets/images/어향가지.jpg",
    "alt": "어향가지",
    "description": "가지를 먹기 좋은 크기로 손질해 익힌 뒤, 마늘과 고추 등의 향신 채소를 활용한 어향 소스와 함께 조리한 요리입니다. 가지가 소스의 풍미를 충분히 머금도록 조리하고, 소스의 감칠맛과 가지의 부드러운 식감이 조화를 이루도록 완성했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "yuringi",
    "title": "유린기",
    "subtitle": "",
    "category": "chinese",
    "categoryLabel": "중식",
    "image": "assets/images/유린기.jpg",
    "alt": "유린기",
    "description": "닭고기를 적당한 크기로 손질하고 튀김옷을 입혀 바삭하게 튀긴 뒤, 새콤한 간장 베이스의 소스를 곁들인 요리입니다. 닭고기의 바삭한 식감을 유지하면서 소스의 산미와 감칠맛이 조화를 이루도록 구성했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "ketchup-shrimp",
    "title": "케찹 새우",
    "subtitle": "",
    "category": "chinese",
    "categoryLabel": "중식",
    "image": "assets/images/케찹 새우.png",
    "alt": "케찹 새우",
    "description": "새우를 손질해 튀김옷을 입힌 뒤 바삭하게 튀기고, 케첩을 활용한 새콤달콤한 소스에 버무린 요리입니다. 새우의 탱글한 식감과 튀김옷의 바삭함을 살리면서 소스가 고르게 코팅되도록 완성했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "sous-vide-tbone",
    "title": "수비드 티본 스테이크",
    "subtitle": "",
    "category": "western",
    "categoryLabel": "양식",
    "image": "assets/images/수비드한 티본스테이크.jpg",
    "alt": "수비드 티본 스테이크",
    "description": "티본 부위의 소고기를 활용해 고기의 풍미와 육즙을 살리는 데 중점을 둔 요리입니다. 수비드 조리로 내부 온도를 정밀하게 관리한 뒤, 표면을 강하게 시어링해 고기의 풍미와 먹음직스러운 갈색 크러스트를 표현했습니다. 곁들임 채소를 함께 구성해 전체적인 균형을 맞췄습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "crispy-roulade",
    "title": "알망데 소스를 곁들인 치킨 꼬르동블루",
    "subtitle": "",
    "category": "western",
    "categoryLabel": "양식",
    "image": "assets/images/알망데 소스를 곁들인 치킨 꼬르동블루.jpg",
    "alt": "알망데 소스를 곁들인 치킨 꼬르동블루",
    "description": "닭고기를 손질해 속재료를 넣고 감싸 조리한 뒤, 겉면은 바삭하고 내부는 촉촉한 식감이 나도록 완성한 요리입니다. 알망데 소스를 곁들여 닭고기와 속재료의 풍미를 보완하고, 소스와 메인 재료의 조화를 고려해 플레이팅했습니다.",
    "details": [],
    "objectPosition": "center"
  },
  {
    "id": "roasted-main",
    "title": "샐러리악 퓌레를 곁들인 오리 장각",
    "subtitle": "",
    "category": "western",
    "categoryLabel": "양식",
    "image": "assets/images/양파 퓨레를 곁들인 오리장각.jpg",
    "alt": "샐러리악 퓌레를 곁들인 오리 장각",
    "description": "오리 장각을 활용해 고기의 풍미와 촉촉한 식감을 살리고, 샐러리악을 부드럽게 익혀 퓌레로 만들어 함께 구성한 요리입니다. 오리 고기의 진한 풍미와 샐러리악 특유의 은은한 향과 부드러운 맛이 조화를 이루도록 했으며, 소스와 가니시의 배치를 고려해 완성했습니다.",
    "details": [],
    "objectPosition": "center"
  }
],
};
