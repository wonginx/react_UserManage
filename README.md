# react_UserManage


1. Input 받을 수 있는 ‘Username’ , ‘Age’ 를 구현하고 해당 데이터를 하단에 보여지게 하였습니다
2. ‘Username’ , ‘Age’ 에 제약조건을 구현하여 조건에 해당되지 않는다면 ‘모달창’을 띄우게 하였습니다.
3. 모달창은 팝업창과 목적은 동일합니다. ( 공지, 주의사항, 안내문 등을 전달 및 강조해야 할 때 사용 )
    
    팝업창은 재활용+이동이 자유롭지만 사용자 입장에서는 여러개의 팝업창이 띄워질 경우 일일이 X를 누르며 종료시켜야 하는 불편함이 존재합니다.
    
    모달창은 기존의 브라우저 페이지 위에 새로운 윈도우 창이 아닌, 레이어를 까는 것을 말합니다. 제거하지 않고도 페이지를 이동하면 사라지며, 기존의 페이지와 부모-자식관계를 갖습니다.


![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f8308402-7fba-4e5e-a0ac-3de172c53653/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220203T175546Z&X-Amz-Expires=86400&X-Amz-Signature=5e8b4bd300bfb1934f9cf211f8bf97c7b9f9f5557efd4be10a16cfde221b69d6&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/670b4934-1f0d-41ef-8535-f0be753739e7/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220203T175525Z&X-Amz-Expires=86400&X-Amz-Signature=323a6521b44b43dd1f5ee5a7c1516a20db8716281aef0e2447511c83f6762ce1&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)
