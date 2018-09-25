import java.math.BigInteger;
import static java.lang.System.out;

public class Cal {
    public static void main(String[] args) {
        BigInteger x = new BigInteger(args[0]);
        BigInteger y = new BigInteger(args[2]);
        switch(args[1]) {
            case "+": out.println(x.add(y)); break;
            case "-": out.println(x.subtract(y)); break;
            case "x": out.println(x.multiply(y)); break;
            case "/": out.println(x.divide(y));
        }
    }
}