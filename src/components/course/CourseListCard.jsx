import Courseitem from "./Courseitem";

function CourseListCard(props) {
    return (
        <div class="card">
        <div class="card__header">강의 목록</div>
        <div class="card__body">
          <div class="courses">
            <Courseitem image={`./img/tree-1.jpg`} 
              title="입문자를 위한, HTML&CSS 개발 과정" 
              description="HTML&CSS 개발에 필요한 기본 지식을 배웁니다" />
            <Courseitem image={`./img/tree-2.jpg`} 
              title="초급자를 위한, JAVA&PYTHON 개발 과정"  
              description="JAVA&PYTHON 개발에 필요한 기초 과정입니다" />
            <Courseitem image={`./img/tree-3.jpg`} 
              title="중급자를 위한, SPRING BOOT 개발 과정"  
              description="SPRING BOOT 개발 중급 과정을 배웁니다" />
          </div>
        </div>
      </div>
    );
}

export default CourseListCard;