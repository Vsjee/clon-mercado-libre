import { NgModule } from "@angular/core"
import { MatTabsModule } from "@angular/material/tabs"
import { MatProgressBarModule } from "@angular/material/progress-bar"

@NgModule({
  exports: [MatTabsModule, MatProgressBarModule],
})
export class MaterialModule {}
