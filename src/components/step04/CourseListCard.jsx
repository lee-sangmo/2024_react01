import React from 'react';
import CourseItem from './CourseItem';

function CourseListCard({ items }) {
    const [course1, course2, course3] = items;
    return (
        <div class="card">
            <div class="card__header">강의 목록</div>
            <div class="card__body">
                <div class="courses">
                    <CourseItem {...course1} />
                    <CourseItem {...course2} />
                    <CourseItem {...course3} />
                </div>
            </div>
        </div>
    );
}

export default CourseListCard;