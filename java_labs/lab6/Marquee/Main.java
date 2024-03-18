import javax.swing.*;
import java.awt.*;

public class Main extends JFrame implements Runnable {
    JLabel gendy = new JLabel();
    Thread th;

    public Main() {
        this.setTitle("Ahmed Nagy Java Task");
        gendy.setText("I Love Eng:Elgendy(The King Of Python)");
        gendy.setHorizontalAlignment(JLabel.CENTER);
        this.add(gendy, BorderLayout.WEST);
        th = new Thread(this);
        th.start();
    }

    public static void main(String[] args) {
        Main marquee = new Main();
        marquee.setBounds(50, 50, 600, 400);
        marquee.setVisible(true);
    }

    public void run() {
        while (true) {
            int marquee_x = gendy.getX();
            int marquee_y = gendy.getY();

            marquee_x += 5;
            marquee_x%=this.getWidth();

            // Set the new position
            gendy.setLocation(marquee_x, marquee_y);

            try {
                Thread.sleep(250);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

