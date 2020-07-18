import { Component, OnInit, Input } from '@angular/core';
import { Course } from "./../course";
import { CourseService } from "../course.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  
  @Input() course: Course;

  constructor(private courseService: CourseService, private route: ActivatedRoute) { }

  getCourseById(id) {
    this.courseService.getCourseById(id).subscribe(course => this.course=course);
  }

  ngOnInit(): void {
    this.getCourseById(eval(this.route.snapshot.paramMap.get('id'))-1);
  }

}
