import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExercisesComponent } from "./exercises.component";

const routes: Routes = [
  {
    path: "exercise",
    component: ExercisesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisesRoutingModule {}
