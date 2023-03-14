console.log("di");

/**
 * incremental  true면, 수정된 내용만 컴파일
 * target 어떤 버전으로 컴파일 할 지
 * module 모듈 정보, npde면 commonJs 웹은 ES2020
 * allowJs js와 ts를 섞어 쓸 건지
 * checkJs js와 ts를 섞어 쓸때 사용22
 * sourceMap 디버그 할 때 사용
 * composite 이전에 빌드한걸 기억하고 다음에 빌드할때 더 빠르게
 * tsBuildInfoFile incremental이 true이면 이 정보를 저장할 경로를 지정
 * removeComments 코멘트 지움
 * noEmit 컴파일 에러만하고 js로 안바꿈
 * importHelpers 정말 예전버전 지원
 * downlevelIteration
 * isolatedModules 각각의 파일을 다른 모듈로 변환해서 만듦
 */
