package com.fa.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.fa.Entity.NgEntity;



@Repository
public interface NgRepository extends JpaRepository<NgEntity, Long> {
	
//	table start
	@Query(value="select * from ng where name=?1",nativeQuery=true)
	NgEntity getDataByName(String name);

	@Query(value="select id from ng where name=?1",nativeQuery=true)
	long getIdByName(String name);
//	table end
	
//	login start
	@Query(value="select email from ng  where email=?1",nativeQuery = true)
	String getDataByEmail(String email);
	
	@Query(value="select password from ng  where email=?1",nativeQuery = true)
	String getDataByPassword(String password);
//	login end
	@Query(value="call emp_seq_code()",nativeQuery = true)
	String getEmpId();

}
