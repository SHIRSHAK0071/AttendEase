import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/color';

interface SubjectCardProps {
  subject: string;
  code: string;
  teacher: string;
  attended: number;
  total: number;
  percentage: number;
}

const SubjectCard: React.FC<SubjectCardProps> = ({
  subject,
  code,
  teacher,
  attended,
  total,
  percentage,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.subjectText}>{subject}</Text>
        <Text style={styles.codeText}>{code}</Text>
        <Text style={styles.teacherText}>{teacher}</Text>
        <Text style={styles.attendanceText}>
          Classes Attended - {attended} / {total}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.percentageCircle}>
          <Text style={styles.percentText}>{percentage}%</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.detailsLink}>View Full Details &gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubjectCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  subjectText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: colors.darkText,
  },
  codeText: {
    fontWeight: '600',
    fontSize: 12,
    color: colors.darkText,
    marginTop: 4,
  },
  teacherText: {
    fontSize: 12,
    color: colors.darkText,
    marginTop: 2,
  },
  attendanceText: {
    marginTop: 8,
    fontSize: 12,
    color: '#555',
  },
  rightContainer: {
    alignItems: 'center',
  },
  percentageCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  percentText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  detailsLink: {
    color: colors.primaryBlue,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
