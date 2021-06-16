import { ComponentFixture, TestBed } from "@angular/core/testing";

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
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Should auto generate Id when id input property is missing', () => {
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should not generate Id when id input property is present', () => {
    const component = fixture.componentInstance;
    const someId = 'idTeste'
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });


});
