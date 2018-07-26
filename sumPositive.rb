def positive_sum(arr)
    sum = 0
    arr.each do |num|
      unless num < 0
        sum += num
      end
    end
    sum
  end

  puts positive_sum([1,2,3,4,5,-1,2])