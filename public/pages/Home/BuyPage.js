import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const renderCurrentWeek = () => {
  const currentDay = new Date();
  const currentDayOfWeek = currentDay.getDay();
  const startDay = new Date(currentDay);
  startDay.setDate(currentDay.getDate() - currentDayOfWeek);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const day = new Date(startDay);
    day.setDate(day.getDate() + i);

    const dayName = day.toLocaleDateString("en-Us", { weekday: "short" });
    const dayNumber = day.getDate();
    const Month = day.getMonth();

    weekDays.push({
      id: i,
      name: dayName,
      month: monthNames[Month],
      number: dayNumber,
    });
  }

  return weekDays;
};

const BuyPage = () => {
  const [currentWeek, setCurrentWeek] = useState(renderCurrentWeek());
  const [currentTime, setCurrentTime] = useState([
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.reservationDetails}>
        <Text>Reservation details</Text>
        <View style={styles.dayContainer}>
          <Text style={styles.text}>Day</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {currentWeek.map(({ id, name, month, number }) => {
              return (
                <TouchableOpacity style={styles.day} key={id}>
                  <Text style={{ fontWeight: 400 }}>{name}</Text>
                  <Text style={{ fontWeight: 500, color: "#888888" }}>
                    {number + " "}
                    {month}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.dayContainer}>
          <Text style={styles.text}>Time</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {currentTime.map((time, index) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.day,
                    { paddingHorizontal: 25, paddingVertical: 15 },
                  ]}
                  key={index}
                >
                  <Text style={{ fontWeight: 400 }}>{time}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.dayContainer}>
          <Text style={styles.text}>Hours</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5, 6, 7].map((time, index) => {
              return (
                <TouchableOpacity style={styles.hour} key={index}>
                  <Text style={styles.hourText}>{time}H</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  dayContainer: {
    gap: 10,
  },
  day: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#eee",
    borderRadius: 100,
    marginRight: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  hour: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#eee",
    marginRight: 20,
    borderRadius: 100,
  },
});
export default BuyPage;
