package LiveCoding3;



public class MangosNaranjas {
	
	int Cajas;
	int Mangos;
	int Naranjas;
	
	public MangosNaranjas (int mangos, int naranjas) {
		
		super();
		Cajas= MCD (naranjas, mangos);
		Mangos= mangos;
		Naranjas= naranjas;
		
	}//MANGOS NARANJAS
	
	public void Imprimir () {
		
		System.out.println("El número de cajas es:" + Cajas + " " + "El número de mangos en una caja es:" + Mangos/Cajas + " " + "El número de naranjas en una caja es:"+ Naranjas/Cajas);
		
	}//Imprimir
	
	private int MCD (int num1, int num2) {
		
		
		int a = Math.max(num1, num2);
		int b = Math.min(num1,num2);
		int res;
	
		
		do {
			res=b;
			b=a%b;
			a=res;
			
		}while (b!=0);
		
		return res;	
		
	}// MCD
	
}//class MangosNaranjas