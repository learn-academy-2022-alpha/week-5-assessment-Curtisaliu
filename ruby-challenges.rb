# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']



def finder (array, letter)
  array.select {|word| word.include? letter}
end

p finder(beverages_array, letter_o)
p finder(beverages_array, letter_t)

# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum_Num (array)
  array.inject(:+)
end

p sum_Num(nums_array1)
p sum_Num(nums_array2)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
  def initialize(model, wheels)
    @model = model
    @wheels = wheels
    @current_speed = 0
  end

  def bike_info
    "The #{@model} has #{@wheels} wheels and is going #{@current_speed} mph."
  end

  def pedal_faster(num1)
    @current_speed += num1
  end

  def brake(num2)
    if @current_speed - num2 <= 0
      @current_speed = 0
    else
      @current_speed -= num2
    end
  end
end

ride = Bike.new('Trek', 2)
p ride.bike_info
p ride.pedal_faster(10)

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

p ride.pedal_faster(10)
p ride.pedal_faster(28)
p ride.brake(10)
p ride.brake(40)

output:
10
20
48
38
0

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
