import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './project.entity';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() project: Project): Promise<Project> {
    return this.projectService.createProject(project);
  }

  @Get()
  findAll(): Promise<Project[]> {
    return this.projectService.findAll();
  }
}
