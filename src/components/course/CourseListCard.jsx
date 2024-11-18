import Courseitem from "./Courseitem";

function CourseListCard(props) {
    return (
        <div class="card">
        <div class="card__header">강의 목록</div>
        <div class="card__body">
          <div class="courses">
            <Courseitem image={`coffee-blue.jpg`} name="HTML&CSS 개발" />
            <Courseitem image={`bear.jpg`} name="JAVA&PYTHON 개발"  />
            <Courseitem image={`kitten-3.jpg`} name="SPRING BOOT 개발"  />
          </div>
        </div>
      </div>
    );
}

export default CourseListCard;