import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
       String ipAddress="192.168.1.22";
       if(isValidIPAddress(ipAddress)){
           String[] octets=ipAddress.split("\\.");
           for (String octet : octets){
               System.out.println(octet);
           }
       }
       else{
           System.out.println("invalid ip address");
       }
    }
    public static boolean isValidIPAddress(String ipAddress) {
        String regex = "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(ipAddress);
        return matcher.matches();
    }

}

