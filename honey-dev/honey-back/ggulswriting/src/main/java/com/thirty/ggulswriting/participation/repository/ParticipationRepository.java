package com.thirty.ggulswriting.participation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import com.thirty.ggulswriting.member.entity.Member;
import com.thirty.ggulswriting.participation.entity.Participation;
import com.thirty.ggulswriting.room.entity.Room;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ParticipationRepository extends JpaRepository<Participation, Integer> {
	Optional<Participation> findParticipationByMemberAndRoom(Member member, Room room);

	Optional<Participation> findParticipationByMemberAndRoomAndIsOutIsFalse(Member member, Room room);

	List<Participation> findAllByRoomAndIsOutIsFalse(Room room);

	List<Participation> findAllByMemberAndIsOutIsFalse(Member member);

	Optional<Participation> findFirstByRoomAndIsOutIsFalseAndMemberNot(Room room, Member member, Sort sort);

	int countAllByRoomAndIsOutIsFalse(Room room);
}
