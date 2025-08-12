import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule
],
  templateUrl: './courses.html',
  styleUrl: './courses.scss'
})
export class Courses implements OnInit {

  courses: Course[] = [
    { _id: '1', name: 'Angular Basics', category: 'Web Development' },
    { _id: '2', name: 'Spring Boot Fundamentals', category: 'Backend Development' },
    { _id: '3', name: 'Database Design', category: 'Database' }
  ];

  displayedColumns = ['name', 'category'];

  constructor() {
  }

  ngOnInit() {
    // Simulating fetching courses from a service
  }



}
