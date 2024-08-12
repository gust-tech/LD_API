var x = 0;
var estado = 1;
var y = 0;



function setup() {
	createCanvas(1200, 545);
}

function draw() {
 
	if (estado == 1){ //cria o primeiro cenário
	background (7, 1, 26);
	noStroke ();
	
	//texto
	fill (255, 255, 255);
	textSize (20);
	text ("Ajude o Goku a destruir a Terra pressionando o mouse/tela :>", 100, 100);
	
	//estrelas
	fill (255, 255, 255, 20);
	ellipse (90, 100, 20);
  ellipse (220, 180, 15);
	ellipse (480, 200, 10);
	ellipse (510, 30, 8);
	ellipse (670, 432, 14);
	//estrelas 2
	fill (255, 255, 255, 40);
	ellipse (880, 182, 20);
	ellipse (753, 222, 13);
	ellipse (953, 502, 18);
	ellipse (453, 320, 17);
	ellipse (1190, 50, 15);
	//estrelas 3
	fill (255, 255, 255, 60);
	ellipse (790, 100, 21);
	ellipse (80, 200, 16);
	ellipse (1113, 450, 12);
	
	//lua
	fill (173, 165, 166);
	arc (300, 600, 600, 600, PI, 0);
	ellipse (30, 500, 50);
	ellipse (100, 400, 50);
	ellipse (200, 350, 100);
	ellipse (350, 330, 80);
	ellipse (500, 420, 110);
	ellipse (570, 520, 60);
	
	//terra
	fill (10, 43, 143);
	ellipse (1000, 250, 300);
	fill (5, 161, 26);
	rect (930, 220, 100, 150, 40);
	rect (880, 160, 150, 70, 40);
	rect (1070, 200, 50, 100, 40);
	fill (255, 255, 255, 60);
	rect (910, 130, 100, 25, 40);
	rect (920, 330, 180, 30, 40);
	rect (970, 190, 120, 50, 40);
		
	//goku rosto
	fill (250, 207, 137);
	ellipse (200, 250, 50, 50);
	//cabelo
	fill(0, 0, 0);
	rect (170, 185, 20, 50, 50);
	rect (190, 205, 20, 30, 50);
	rect (210, 215, 20, 20, 50);
	rect (140, 225, 40, 20, 50);
	rect (220, 225, 40, 20, 50);
	//corpo
	fill (247, 124, 0);
	rect (170, 275, 60, 100, 20);
	//pernas
	fill (247, 124, 0);
	rect (170, 370, 25, 100, 20);
	rect (205, 370, 25, 100, 20);
	//braços
	fill (250, 207, 137);
	rect (145, 280, 25, 100, 20);
	rect (230, 280, 25, 100, 20);
	//pés
	fill (25, 45, 255);
	rect (170, 460, 25, 40, 20);
	rect (205, 460, 25, 40, 20);
	//acessórios
	fill (25, 45, 255);
	rect (170, 360, 60, 20, 20);
	rect (142, 270, 30, 20, 20);
	rect (230, 270, 30, 20, 20);
	rect (185, 270, 30, 20, 20);

	if (mouseIsPressed){ //faz o efeito do kamehameha aparecer quando o mouse está pressionando na tela
		fill (66, 167, 255);
		rect (250+x, 320, 200, 80, 50); //o kamehameha anda para direita
		fill (90, 232, 230);
		rect (140+x, 320, 120, 30, 50); //rastros
		rect (110+x, 370, 150, 30, 50);
		x=x+4; // incrementa o x
		fill (255, 255, 255);
		textSize (20);
		text ("Kame-Hame-Haaaaaaaaaaaaaaaaaa", 300, 450);
		
	
      if (x > 480) { //aqui faz a verificação do valor do x que vai fazer a colisão do kamehameha com a terra
        estado = 2;
		}
	}

}
		else if (estado == 2) { //aqui cria o cenário 2 após a colisão
		background (247, 140, 10);
		
		fill (66, 66, 66);
		arc (980, 200, 150, 150, PI, 0);
		rect (905, 190, 150, 150, 10);
		
		fill (0, 0, 0);
		textSize (30);
		text ("RIP", 955, 200);	
			
		fill (247, 10, 10); //nova terra
		ellipse (950, 200-y, 300);
		ellipse (1000, 300+y, 250);
		ellipse (930-y, 100, 60);
		ellipse (930-y, 400, 35);
			
		fill (140, 133, 69); //nova lua
		arc (300, 600, 600, 600, PI, 0);
		ellipse (30, 500, 50);
		ellipse (100, 400, 50);
		ellipse (200, 350, 100);
		ellipse (350, 330, 80);
		ellipse (500, 420, 110);
		ellipse (570, 520, 60);	
			
		fill(145, 3, 3); //destroços
		rect (830-y, 220+y, 50, 30, 40);
		rect (920+y, 300+y, 100, 50, 40);
		rect (1120-y, 160-y, 80, 40, 40);
		rect (930+y, 100-y, 60, 30, 40);
			
		//nave
		fill (95, 95, 107);
		ellipse (200, 420, 200, 80, 100);	
		fill (191, 191, 189);	
		arc (200, 420, 90, 150, PI, 0);
		fill (20, 19, 19);
		rect (185, 340, 30, 10, 50);
		fill (148, 0, 0)
		rect (190, 330, 20, 10, 50);
			
		//policial et
		fill (5, 145, 0);
		ellipse (330, 380, 20, 20);
		rect (310, 390, 10, 30, 40);
		rect (340, 390, 10, 30, 40);
		rect (320, 420, 10, 30, 40);
		rect (330, 420, 10, 30, 40);	
		fill (25, 45, 255)
		rect (320, 390, 20, 30, 40);
			
		fill (145, 3, 3);
		textSize (30);
		text ("Meu Deus, você realmente destruiu a Terra! :<", 120, 220);
		textSize (20);
		text ("-Goku foi embora e deixou as questões legais desse crime intergalático com você-", 60, 240);
		textSize (10);
		text ("Oi, meu chapa...", 360, 385);
		textSize (10);
		text ("et polícia", 180, 440);	
			
		y=y + 1;
		
		}		
}
