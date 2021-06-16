import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {

  // embrulha meu componente, ajuda durante o teste
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents(); // aguarda a compilação do componente inteiro, angular faz a requisição asyncrona

    fixture = TestBed.createComponent(LikeWidgetComponent);

  });

  it('Should create component', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });


});
