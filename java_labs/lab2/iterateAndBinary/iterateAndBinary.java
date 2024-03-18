import java.util.*;
import java.util.function.BinaryOperator;

public class iterateAndBinary {
    public static void main(String[] args) {
        int[] arr = new int[1000];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = i + 1;
        }
        // Unordered array
        shuffleArray(arr);

        long startTime = System.nanoTime(); // Capture start time
        long startMillis = System.currentTimeMillis(); // Capture start time in milliseconds

        // Find the maximum and the minimum numbers
        int maxim = 0;
        int mini = 1002;
        for (int i = 0; i < arr.length; i++) {
            maxim = Math.max(maxim, arr[i]);
            mini = Math.min(mini, arr[i]);
        }

        long endTime = System.nanoTime(); // Capture end time
        long endMillis = System.currentTimeMillis(); // Capture end time in milliseconds

        // Calculate elapsed time in nanoseconds
        long elapsedTimeNano = endTime - startTime;

        // Calculate elapsed time in milliseconds
        long elapsedTimeMillis = endMillis - startMillis;

        System.out.println("Execution time in nanoseconds: " + elapsedTimeNano);
        System.out.println("Execution time in milliseconds: " + elapsedTimeMillis);


        System.out.println("");
        System.out.println("========in binary search====");
        Arrays.sort(arr);

        endTime=System.nanoTime();
        endMillis=System.currentTimeMillis();
        
        int returnedMax= binarySearchOn(maxim,arr);
        int returnedMin=binarySearchOn(mini,arr);

        long afterBinaryInMilleSeconds= System.currentTimeMillis();
        long afterBinaryInNanoSeconds= System.nanoTime();

        elapsedTimeMillis = (endMillis - afterBinaryInMilleSeconds)*-1;
        elapsedTimeNano = (endTime - afterBinaryInNanoSeconds)*-1;

        System.out.println("Execution time in nanoseconds: " + elapsedTimeNano);
        System.out.println("Execution time in milliseconds: " + elapsedTimeMillis);
    }

    // Shuffle array method
    public static void shuffleArray(int[] array) {
        List<Integer> list = new ArrayList<>();
        for (int value : array) {
            list.add(value);
        }
        Collections.shuffle(list);
        for (int i = 0; i < array.length; i++) {
            array[i] = list.get(i);
        }

    }
    public static int binarySearchOn(int value, int[] array){
        int left=0,right=array.length-1;
        while(left<=right){
            int mid=(left+right)/2;
            if(value==array[mid]){
                return mid;
            }
            else if(array[mid]>value){
                right=mid-1;
            }
            else{
                left=mid+1;
            }
        }
        return -1;
    }
}

