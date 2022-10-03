package LiveCoding3;
import java.util.Scanner;

public class Code3 {
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner scan =new Scanner(System.in);
		System.out.println("Introduzca el número de mangos y naranjas");
		int num1= scan.nextInt();
		int num2= scan.nextInt();
		
		scan.close();
		
		MangosNaranjas MN= new MangosNaranjas(num1,num2);
		MN.Imprimir();
	}

}